import { double } from "./module"

const quadruple = (value: number) => double(double(double(value)))

export { quadruple }
