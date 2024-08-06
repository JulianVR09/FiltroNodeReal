import { container } from "tsyringe";
import UserRepository from "../repositories/userRepository";
import ProductRepository from "../repositories/productRepository";
import OrderRepository from "../repositories/orderRepository";
import ProductCartRepository from "../repositories/productCartRepository";

import UserService from "../services/userService";
import ProductService from "../services/productService";
import OrderService from "../services/orderService";
import ProductCartService from "../services/productCartService";

container.registerSingleton<UserRepository>("UserRepository", UserRepository);
container.registerSingleton<ProductRepository>("ProductRepository", ProductRepository);
container.registerSingleton<OrderRepository>("OrderRepository", OrderRepository);
container.registerSingleton<ProductCartRepository>("cartRepository", ProductCartRepository);

container.registerSingleton<UserService>(UserService, UserService);
container.registerSingleton<ProductService>(ProductService, ProductService);
container.registerSingleton<OrderService>(OrderService, OrderService);
container.registerSingleton<ProductCartService>(ProductCartService, ProductCartService);