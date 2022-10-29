import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import ListUsersService from "../services/ListUsersService";
import UpdateUserService from "../services/UpdateUsersService";

export default class UsersController {

  public async index(request: Request, response: Response): Promise<Response> {

    const listUser = new ListUsersService();

    const users = await listUser.execute();

    return response.json(users);

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const users = await createUser.execute({

      name: name,
      email: email,
      password,
    });

    return response.json(users);
  }



  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const { id } = request.params;

    const updatedUser = new UpdateUserService();

    const user = await updatedUser.execute({ id, name, email, password });

    return response.json(user);


  }




  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletedUser = new DeleteUserService();

    await deletedUser.execute({ id });

    return response.json([]);

  }

}
