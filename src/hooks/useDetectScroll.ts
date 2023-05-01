import { useState, useEffect } from "react";
import PropTypes from "prop-types";

interface useDetectScrollProps {
    /**
     * @thr number
     * A number to indicate the threshold of firing scroll direction event,
     * which is 0 by default and only accepts a positive numeric value. If it gets a higher
     * value the steps will be longer.
    */
    thr?: number
    /**
     * @axis string
     * Indicates the page scroll axis, whether in the y or x axes.
     * It is y by default.
    */
    axis?: string
    /**
     *
     * @scrollUp string
     * A string value for the output of the custom hook if the scroll direction is upward.
     * The default value is up if the axis is y and left if the axis is x.
     */
    scrollUp?: string
    /**
     * @scrollDown string
     * A string value for the output of the custom hook if the scroll direction is downward.
     * The default value is down if the axis is y and right if the axis is x.
     */
    scrollDown?: string
    /**
     * @still: string
     * Default value for the direction when there is no scrolling happening on the page.
     * The default value is still.
     */
    still?: string
}

export function useDetectScroll(props: useDetectScrollProps) {
    const {
        thr = 0,
        axis = "y",
        scrollUp = axis === "y" ? "up" : "left",
        scrollDown = axis === "y" ? "down" : "right",
        still = "still",
    } = props;
    const [scrollDir, setScrollDir] = useState(still);

    useEffect(() => {
        const threshold = thr > 0 ? thr : 0;
        let ticking = false;
        let lastScroll = 0;

        axis === "y"
            ? (lastScroll = window.scrollY)
            : (lastScroll = window.scrollX);

        const updateScrollDir = () => {
            let scroll = undefined;

            axis === "y"
                ? (scroll = window.scrollY)
                : (scroll = window.scrollX);

            if (Math.abs(scroll - lastScroll) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scroll > lastScroll ? scrollDown : scrollUp);
            lastScroll = scroll > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return [scrollDir];
}