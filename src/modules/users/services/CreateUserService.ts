import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import User from "../typeorm/Users";


interface IRequest {
  name: string;
  email: string;
  password: string;

}


class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError(`User ${name} already exists`);

    }

    const user = usersRepository.create({

      name: name,
      email: email,
      password: password,

    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
