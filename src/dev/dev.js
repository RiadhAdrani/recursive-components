import { Render } from "@riadh-adrani/recursive";
import { Column } from "../../Utility";
import { Text, A, Svg, Circle } from "../../Vector";

Render(() => {
    return Column({
        style: { inline: { width: "50%" } },
        children: [
            Svg({
                viewBox: "0 0 100 100",
                children: [
                    A({
                        props: { href: "https://www.google.com" },
                        children: Circle({ props: { cx: 50, cy: 40, r: 35 } }),
                    }),
                    ,
                    Text({
                        children: "children",
                        props: { x: 50, y: 90, textAnchor: "middle" },
                    }),
                ],
            }),
        ],
    });
});
