import ClientsideDisplayNumber from "./ClientsideDisplayNumber";

export default function ServersideComponent() {
    // This is a serverside component, ostensibly.
    return (
        <div>
            {/* Look, we're displaying an envvar, those are only available on the server :)) */}
            This is server side gosh dangit! see: {process.env.myEnvvar ?? ""}

            <ClientsideDisplayNumber/>
        </div>
    )
}