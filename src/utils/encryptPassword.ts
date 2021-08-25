import bcrypt from "bcryptjs";

export default function encryptPassword(rawPassword: string): string {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  return bcrypt.hashSync(rawPassword, salt);
}
