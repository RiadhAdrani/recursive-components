import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, flags }) => {
    return new CreateComponent({
        tag: "fragment",
        children,
        flags,
    });
};
