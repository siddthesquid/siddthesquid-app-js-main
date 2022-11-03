// import * as T from "@effect/core/io/Effect"
// import { Effect } from "@effect/core/io/Effect";
// import * as L from "@effect/core/io/Layer"
// import { pipe } from "@tsplus/stdlib/data/Function";
// import { Tag } from "@tsplus/stdlib/service/Tag"

import { Effect } from "@effect/core/io/Effect"

// import { readFile, writeFile } from 'node:fs/promises';

// export interface FileService {
//   readonly read: (path: string) => T.Effect<unknown, Error, string>
//   readonly write: (path: string, content: string) => T.Effect<unknown, Error, void>
// }

// export const FileService = Tag<FileService>()

// export const FileServiceLive = L.fromEffect(FileService)(
//   Effect.sync(() => ({
//     read: (path) => T.promise(() => readFile(path, "utf8")),
//     write: (path, content) => T.async(() => writeFile(path, content)),
//   }))
// )

const p = Do($ => {
  $(Effect.succeed(1))
})