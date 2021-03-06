import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, dateTime, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "time",
        children,
        props: { ...props, dateTime },
        data: { dateTime },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
