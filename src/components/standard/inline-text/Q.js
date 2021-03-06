import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, cite, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "q",
        children,
        props: { ...props, cite },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
