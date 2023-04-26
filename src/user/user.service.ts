import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = new User();
      user.fullName = createUserDto.fullName;
      const userData = await user.save();
      return new UserDto(userData);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
