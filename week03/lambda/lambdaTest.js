// requires lambda.js


const ok = [];
const test = result => ok.push(result);

// // id
// test( id(1) === 1 );
// test( id(id) === id );
//
// // konst
// test( konst(42)(0) === 42 );
// test( konst(42)(1) === 42 );
// test( konst(42)(null) === 42 );
//
// // kite
// test( snd(null)(42) === 42 );
//
// // true
//
// test( T(1)(0) === 1 );
// test( F(1)(0) === 0 );
//
// // and
// test( and(F)(F) === F );
// test( and(T)(F) === F );
// test( and(F)(T) === F );
// test( and(T)(T) === T );
//
// // or
// test( or(F)(F) === F );
// test( or(T)(F) === T );
// test( or(F)(T) === T );
// test( or(T)(T) === T );

// flip
// flip(f)(x)(y) = f(y)(x)
//
// // not
//
// // beq
//
// // Pair
//
// const dierk = Pair("Dierk")("König"); // immutable
// test( dierk(firstname) === "Dierk");
// test( dierk(lastname)  === "König");
//
// const tdierk = Triple("Dierk")("König")(50); // immutable
// test( tdierk(tfirstname) === "Dierk");
// test( tdierk(tlastname)  === "König");
// test( tdierk(tage)       === 50);
//
// // tuple
// const [Person, fn, ln, ag] = Tuple(3);
// const person = Person("Dierk")("König")(50);
// test( person(fn) === "Dierk");
// test( person(ln) === "König");
// test( person(ag) === 50);
//
// // composed Tuple
//
// const [Team, lead, deputy] = Tuple(2);
// const team = Team (person) (Person("Roger")("Federer")(35));
// test( team(lead)(fn)   === "Dierk");
// test( team(deputy)(ln) === "Federer");
//
// // Pair equal
//
// // either
//


// const safeDiv = num => divisor =>
//     divisor === 0
//     ? Left("schlecht!")
//     : Right(num / divisor);
//
// either( safeDiv(1)(0)  )
//       ( x => console.error(x))
//       ( x => console.log(x));

//
// const [Cash, CreditCard, Invoice, PayPal, pay] = Choice(4);
// const cash = Cash ();
// const card = CreditCard ("0000-1111-2222-3333");
// const invo = Invoice    ({name:"Roger", number:"4711"});
// const pal  = PayPal     (person);  // the payload can be a partially applied function, e.g. Tuple ctor
// const doPay = method =>
//     pay (method)
//         ( _       => "paid cash")
//         ( number  => "credit card "+number)
//         ( account => account.name + " " + account.number )
//         ( person  => "pal: " + person(fn) );
//
// test( doPay(cash) === "paid cash");
// test( doPay(card) === "credit card 0000-1111-2222-3333");
// test( doPay(invo) === "Roger 4711");
// test( doPay(pal ) === "pal: Dierk");




// test result report
const allTestsOk = () => {
    for (let i = 0; i < ok.length; i++) { // not nice, yet. Needs improvement
        if (false === ok[i]) {
            return false;
        }
    }
    return true;
};

if (allTestsOk()) {
    document.writeln("All "+ ok.length +" tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < ok.length; i++) {
        if(ok[i]) {
            document.writeln("Test "+ i +" ok");
        } else {
            document.writeln("Test "+ i +" failed");
        }
    }
}
