export default function AmbiguousComponent({  }) {

    // Now this one, this depends on where you use it.
    return (
        <h1
            className="text-3xl font-bold underline"
        >{process.env.myEnvvar ?? "this is on the client! you can tell because we don't display your envvar."}</h1>
    )
}