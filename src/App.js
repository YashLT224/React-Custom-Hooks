import "./App.css";
import UseToggle from "../src/Toggle/ToggleComponent";
import UseTimeout from "../src/useTimout/TimeCompoent";
import UseDebounce from "../src/useDebounce/DebounceComponent";
import UseUpdateEffect from "../src/useUpdateEffect/UpdateEffectComponent";
import UseArray from "../src/useArray/ArrayComponent";
import UsePrevious from "../src/usePrevious/PreviousComponent";
import UseStateWithHistory from "../src/useStateWithHistory/StateWithHistoryComponent";
import UseStorage from "../src/useStorage/StoageComponent";
import UseAsync from "../src/Use-Async/AsyncComponent";
import UseFetch from "../src/useFetch/FetchComponent";
import UseScript from "../src/useScript/ScriptComponent";
import UseEventListener from "../src/useEventListener/EventListenerComponent";
import UseOnScreen from "../src/useOnScreen/OnScreenComponent";
import UseWindowSize from "../src/usWindowSize/WindowSizeComponent";
import UseDeepComapareeffect from '../src/useDeepCompareEffect/DeepCompareEffectComponent'
import UseMediaQuery from "./useMediaQuery/MediaQueryComponent";
import UseGeolocation from "./useGeolocation/GeolocaonComponent";
import UseSize from '../src/useSize/useSize'
import UseEffectOnce from '../src/useEffectOnce/EffectOnceComponent'
import UseClickOutside from '../src/useClickOutside/ClickOutSideComponent'

function App() {
  return (
    <div className="App">
      <UseToggle />
      <UseTimeout />
      <UseDebounce />
      <UseUpdateEffect />
      <UseArray />
      <UsePrevious />
      <UseStateWithHistory />
      <UseStorage />
      <UseAsync />
      <UseFetch />
      <UseScript />
      <UseEventListener />
      <UseOnScreen />
      <UseWindowSize />
      <UseDeepComapareeffect/>
      <UseMediaQuery/>
      <UseGeolocation/>
      {/* <UseSize/> */}
      <UseEffectOnce/>
      <UseClickOutside/>
    </div>
  );
}

export default App;
