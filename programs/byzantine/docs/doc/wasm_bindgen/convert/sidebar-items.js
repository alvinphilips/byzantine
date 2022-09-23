window.SIDEBAR_ITEMS = {"enum":[["WasmOption",""]],"struct":[["ResultAbi","This is an encoding of a Result. It can only store things that can be decoded by the JS bindings."],["WasmSlice",""]],"trait":[["FromWasmAbi","A trait for anything that can be recovered by-value from the wasm ABI boundary, eg a Rust `u8` can be recovered from the wasm ABI `u32` type."],["IntoWasmAbi","A trait for anything that can be converted into a type that can cross the wasm ABI directly, eg `u32` or `f64`."],["OptionFromWasmAbi","Indicates that this type can be received from JS as `Option<Self>`."],["OptionIntoWasmAbi","Indicates that this type can be passed to JS as `Option<Self>`."],["RefFromWasmAbi","A trait for anything that can be recovered as some sort of shared reference from the wasm ABI boundary."],["RefMutFromWasmAbi","Dual of the `RefFromWasmAbi` trait, except for mutable references."],["ReturnWasmAbi","A trait representing how to interepret the return value of a function for the wasm ABI."],["WasmAbi","An unsafe trait which represents types that are ABI-safe to pass via wasm arguments."]],"union":[["ResultAbiUnion",""]]};