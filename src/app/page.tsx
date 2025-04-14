import { UselessProvider } from "./provider";
import ClientsideButton from "./ClientsideButton";
import ServersideComponent from "./ServersideComponent";
import AmbiguousComponent from "./AmbiguousComponent";


// server comps
// process.env

// ---------------- // There are components that need neither

// client comps
// window, document

export default function Home() {
  return (
    <UselessProvider>
      {/* look, this is rendered on the *server*! see the network devtools and look for this <h1> sup</h1>... */}
      <h1> sup</h1>

      <ClientsideButton />

      <ServersideComponent />

      <AmbiguousComponent/>
    </UselessProvider>
  )
}