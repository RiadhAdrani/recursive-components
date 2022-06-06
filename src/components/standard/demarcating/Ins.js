import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, props, cite, dateTime, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "ins",
        children,
        props: { ...props, cite, dateTime },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
