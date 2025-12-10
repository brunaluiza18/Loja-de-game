import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Bruna1948.',
      database: 'db_lojagames',
      autoLoadEntities: true,
      synchronize: true
    }),
    ProdutoModule,
    CategoriaModule
  ],
})
export class AppModule {}
