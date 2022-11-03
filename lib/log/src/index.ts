// import * as T from "@effect/core/io/Effect"
// import * as L from "@effect/core/io/Layer"
import { pipe } from "@tsplus/stdlib/data/Function"
import { Tag } from "@tsplus/stdlib/service/Tag"

// export type Process = {
//   pid: T.Effect<unknown, never, number>
// }

// export interface ProcessService {
//   readonly spawn: (
//     command: string,
//     args: string[],
//   ) => T.Effect<unknown, Error, void>
// }
// export interface ConsoleService {
//   readonly log: (message: string) => T.Effect<never, never, void>
// }

// export const ConsoleService = Tag<ConsoleService>()

export interface ConsoleService {
  readonly log: (message: string) => T.Effect<never, never, void>
}

export const ConsoleService = Tag<ConsoleService>()

export const LiveConsoleService = L.fromEffect(ConsoleService)(
  T.sync(() => ({
    log: (message: string) =>
      T.sync(() => {
        console.log(message)
      }),
  })),
)

const program = pipe(
  T.Do(),
  T.bind("pid", () => T.sync(() => process.pid)),
  T.unsafeRunPromise,
)

program.then(console.log)
