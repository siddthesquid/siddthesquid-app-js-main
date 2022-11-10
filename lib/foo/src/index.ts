import { double } from "./module"

const quadruple = (x: number) => double(double(x))

export { quadruple }
