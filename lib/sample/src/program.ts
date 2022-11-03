interface Program<R, A, E, B> {
  run: (input: A) => Promise<B>
  map: <C>(f: (b: B) => C) => Program<R, A, E, C>
}

type Literal<B> = Program<any, void, never, B>

const literal = <B>(b: B): Literal<B> => ({
  run: () => Promise.resolve(b),
  map: <C>(f: (b: B) => C) => literal(f(b)),
})

type Func<A, B> = Program<any, A, never, B>

const func = <A, B>(f: (a: A) => B): Func<A, B> => ({
  run: (input: A) => Promise.resolve(f(input)),
  map: <C>(g: (b: B) => C) => func((a) => g(f(a))),
})

/////////////

/*
fdafda
fdafdf
fdaf
fd
*/

const x = literal("ydfddafjlkdf")
x.map((s) => s + s).map

const f = func((x: number) => x * x)
f.map(f)

const m = async (x: number) => x + x

fdasfdsafdas
