/**
 * It creates the default options for the animation.
 * @returns The `defaultOptions` function returns a JavaScript object with the following properties:
 */
export function defaultOptions(animationData) {
  const data = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return data;
}
