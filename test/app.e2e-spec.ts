import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../src/user/user.model';
import { Room } from '../src/room/room.model';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let sequelize: Sequelize;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    sequelize = moduleFixture.get('SEQUELIZE');
    await sequelize.sync({});
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  describe('Users', () => {
    describe('Post /users', () => {
      it('should create a user', async () => {
        return await request(app.getHttpServer())
          .post('/user')
          .expect(201)
          .send({ fullName: 'test name' });
      });
      it('should return 400 if fullName is not present', async () => {
        return await request(app.getHttpServer())
          .post('/user')
          .expect(400)
          .send({});
      });
    });
  });

  describe('Rooms', () => {
    describe('Post /room', () => {
      it('should create a room', async () => {
        return await request(app.getHttpServer())
          .post('/room')
          .expect(201)
          .send({ name: 'test room', description: 'test descrtiption' });
      });
      it('should return 400 if name is not present', async () => {
        return await request(app.getHttpServer())
          .post('/room')
          .expect(400)
          .send({ description: 'test descrtiption' });
      });
      it('should return 400 if description is not present', async () => {
        return await request(app.getHttpServer())
          .post('/room')
          .expect(400)
          .send({ name: 'test room' });
      });
    });
  });

  describe('Room Users', () => {
    describe('Post /room-user', () => {
      it('should create a room user', async () => {
        const user = await User.findOne();
        const room = await Room.findOne();

        return await request(app.getHttpServer())
          .post('/room-user')
          .expect(201)
          .send({ RoomId: room.id, UserId: user.id });
      });

      it('should return 400 when trying to add same user to same room', async () => {
        const user = await User.findOne();
        const room = await Room.findOne();

        return await request(app.getHttpServer())
          .post('/room-user')
          .expect(400)
          .send({ RoomId: room.id, UserId: user.id });
      });

      it('should return 400 if UserId is invalid', async () => {
        const room = await Room.findOne();

        return await request(app.getHttpServer())
          .post('/room-user')
          .expect(400)
          .send({ RoomId: room.id, UserId: 10 });
      });

      it('should return 400 if RoomId is invalid', async () => {
        const user = await User.findOne();

        return await request(app.getHttpServer())
          .post('/room-user')
          .expect(400)
          .send({ RoomId: 10, UserId: user.id });
      });
    });
  });

  describe('Room Messages', () => {
    describe('Post /room-message', () => {
      it('should create a room message', async () => {
        const user = await User.findOne();
        const room = await Room.findOne();
        return await request(app.getHttpServer())
          .post('/room-message')
          .expect(201)
          .send({ RoomId: room.id, UserId: user.id, message: 'test message' });
      });

      it('should return 400 if RoomId is invalid', async () => {
        const user = await User.findOne();
        return await request(app.getHttpServer())
          .post('/room-message')
          .expect(400)
          .send({ RoomId: 10, UserId: user.id, message: 'test message' });
      });

      it('should return 400 if User is not in the room', async () => {
        const room = await Room.findOne();
        return await request(app.getHttpServer())
          .post('/room-message')
          .expect(400)
          .send({ RoomId: room.id, UserId: 10, message: 'test message' });
      });
    });

    describe('Get /room-message', () => {
      it('should get sorted room messages', async () => {
        return await request(app.getHttpServer())
          .get('/room-message')
          .expect(200)
          .send({ sortBy: 'updatedAt' });
      });
    });
  });

  afterAll(async () => {
    await app.close();
    await sequelize.drop();
    await sequelize.close();
  });
});
