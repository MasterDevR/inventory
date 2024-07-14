const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const findUserByDeptId = async (user_credential) => {
  const { deptId } = user_credential;

  try {
    const findUser = await prisma.departmentInformation.findUnique({
      where: {
        deptId: deptId,
      },
      select: {
        deptId: true,
      },
    });
    const findAdmin = await prisma.adminInformation.findUnique({
      where: {
        adminId: deptId,
      },
      select: {
        adminId: true,
      },
    });
    if (!findUser && !findAdmin) {
      return { status: 404, message: "Invalid department ID." };
    }

    const authPassword = await authenticatePassword(user_credential);
    return authPassword;
  } catch (err) {
    console.log(err);
  }
};

// check password
const authenticatePassword = async (user_credential) => {
  const { deptId, password } = user_credential;
  let userData;
  try {
    // check department table
    const findUser = await prisma.departmentInformation.findUnique({
      where: {
        deptId: deptId,
      },
    });
    userData = findUser;
    // check in admin table if nothing found on department table
    if (!findUser) {
      const findAdmin = await prisma.adminInformation.findUnique({
        where: {
          adminId: deptId,
        },
      });
      userData = findAdmin;
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return { status: 401, message: "Invalid password." };
    }

    return userData;
  } catch (err) {
    return { status: 500, message: "Internal Server Error" };
  } finally {
    prisma.$disconnect();
  }
};
module.exports = findUserByDeptId;
