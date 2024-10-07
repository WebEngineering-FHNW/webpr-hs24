const id = (x) => x;
const konst = (x) => (_) => x;
const snd = (_) => (y) => y;

const T = konst;
// const T = (t) => (f) => t;
const F = snd;
// const F = (t) => (f) => f;

// const and = (a) => (b) => a(b(T)(F))(b(F)(F));
// const and = (a) => (b) => a(b(T)(F))(F);
// const and = (a) => (b) => a(b)(F);
const and = (a) => (b) => a(b)(a);
const or = (a) => (b) => a(a)(b);

const flip = (f) => (x) => (y) => f(y)(x);

const Pair = (fn) => (ln) => (fnOrLn) => fnOrLn(fn)(ln);
const firstname = konst;
const lastname = snd;

const Left = (x) => (f) => (_) => f(x);
const Right = (x) => (_) => (g) => g(x);
// const either = (eitherLeftOrRight) => (l) => (r) => eitherLeftOrRight(l)(r);
// const either = (eitherLeftOrRight) => (l) => eitherLeftOrRight(l);
// const either = (eitherLeftOrRight) => eitherLeftOrRight;
const either = id;

// ----- special -----

const Tuple = (n) => [
  parmStore(n + 1)([])((parms) =>
    parms.reduce((accu, it) => accu(it), parms.pop())
  ), // ctor
  ...Array.from({ length: n }, (it, idx) => iOfN(n)(idx)()), // selectors
];

const iOfN =
  (n) =>
  (i) =>
  (
    value // from n curried params, take argument at position i,
  ) =>
    n === 0 ? value : (x) => iOfN(n - 1)(i - 1)(i === 0 ? x : value);

const parmStore =
  (n) =>
  (args) =>
  (
    onDone // n args to come
  ) =>
    n === 0 ? onDone(args) : (arg) => parmStore(n - 1)([...args, arg])(onDone); // store parms in array

const Choice = (n) => [
  ...Array.from({ length: n }, (it, idx) =>
    parmStore(n + 1)([])((parms) => parms[idx + 1](parms[0]))
  ), // ctors
  id,
];
