import ClientsideDisplayNumber from "./ClientsideDisplayNumber";

export default function AmbiguousComponent() {

    return (
        <div>
            This is server side gosh dangit! see: {process.env.myEnvvar ?? ""}

            <ClientsideDisplayNumber/>
        </div>
    )
}