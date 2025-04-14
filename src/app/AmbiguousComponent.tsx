export default function AmbiguousComponent({  }) {

    // Now this one, this depends on where you use it.
    return (
        <h1>{process.env.myEnvvar ?? "this is on the client!"}</h1>
    )
}