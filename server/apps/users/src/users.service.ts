/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/Prisma.Service';

@Injectable()
export class UsersService {
 getHello(): string {
   throw new Error('Method not implemented.');
 }
 constructor(
  private readonly jwtService: JwtService,
  private readonly prisma:PrismaService,
  private readonly configService: ConfigService,
 ){}


 //register user
 async register(registerDto: RegisterDto){
  const {name, email, password} = registerDto;

  const user = {
    name, 
    email,
    password,
  }
  return user;
 }

 //Login Service 
 async Login(loginDto: LoginDto){
  const {email, password} = loginDto;
  const user = {
    email,
    password,
  }
  return user
 }


 //Get All Users Service
 async getUsers(){
  return this.prisma.user.findMany({});
 }
}
