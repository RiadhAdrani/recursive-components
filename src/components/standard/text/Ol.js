import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, reversed, start, type, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "ol",
        children,
        props: { ...props, reversed, start, type },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
