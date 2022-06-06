import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, props, height, width, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "canvas",
        children,
        props: { ...props, height, width },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
