import LogginForm from "../component/Loggin/LogginForm"
import Product from "../component/Product/Product";
import ProductList from "../component/Product/ProdutList";
import Home from "../component/section/Home";
import Notfound from "../component/section/Notfound";
import PostPage from '../component/post/PostPage';
import PostItem from "../component/post/PostItem";
import Cart from "../component/Cart/Cart";

export const RouteComponent = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/dienthoai",
        exact: false,
        main: () => <ProductList />
    },
    {
        path: "/dienthoai/apple",
        exact: false,
        main: () => <ProductList />
    },
    {
        path: "/dienthoai/samsung",
        exact: false,
        main: () => <ProductList />
    },
    {
        path: "/tablet",
        exact: true,
        main: () => <ProductList />
    },
    {
        path: "/laptop",
        exact: false,
        main: () => <ProductList />
    },
    {
        path: "/phukien",
        exact: false,
        main: () => <ProductList />
    },
    {
        path: "/khuyenmai",
        exact: false,
        main: () => <ProductList />
    },
    {
        path: "/login",
        exact: false,
        main: () => <LogginForm />
    },
    {
        path: "/sanpham/:sp",
        exact: false,
        main: () => <Product />
    },
    {
        path: "/post",
        exact: true,
        main: () => <PostPage />
    },
    {
        path: "/post/:sp",
        exact: false,
        main: () => <PostItem />
    },
    {
        path: "/timkiem",
        exact: false,
        main: () => <ProductList />
    },
    {
        path: "/cart",
        exact: false,
        main: () => <Cart />
    },
    {
        path: "",
        exact: false,
        main: () => <Notfound />
    },
]