(function() {var implementors = {};
implementors["base64"] = [{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"base64/read/struct.DecoderReader.html\" title=\"struct base64::read::DecoderReader\">DecoderReader</a>&lt;'a, R&gt;","synthetic":false,"types":["base64::read::decoder::DecoderReader"]}];
implementors["bincode"] = [{"text":"impl&lt;'storage&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bincode/de/read/struct.SliceReader.html\" title=\"struct bincode::de::read::SliceReader\">SliceReader</a>&lt;'storage&gt;","synthetic":false,"types":["bincode::de::read::SliceReader"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"bincode/de/read/struct.IoReader.html\" title=\"struct bincode::de::read::IoReader\">IoReader</a>&lt;R&gt;","synthetic":false,"types":["bincode::de::read::IoReader"]}];
implementors["blake3"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"blake3/struct.OutputReader.html\" title=\"struct blake3::OutputReader\">OutputReader</a>","synthetic":false,"types":["blake3::OutputReader"]}];
implementors["borsh"] = [];
implementors["digest"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"digest/core_api/struct.XofReaderCoreWrapper.html\" title=\"struct digest::core_api::XofReaderCoreWrapper\">XofReaderCoreWrapper</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"digest/core_api/trait.XofReaderCore.html\" title=\"trait digest::core_api::XofReaderCore\">XofReaderCore</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>","synthetic":false,"types":["digest::core_api::xof_reader::XofReaderCoreWrapper"]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["sized_chunks"] = [{"text":"impl&lt;N:&nbsp;<a class=\"trait\" href=\"sized_chunks/types/trait.ChunkLength.html\" title=\"trait sized_chunks::types::ChunkLength\">ChunkLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> for <a class=\"struct\" href=\"sized_chunks/sized_chunk/struct.Chunk.html\" title=\"struct sized_chunks::sized_chunk::Chunk\">Chunk</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.u8.html\">u8</a>, N&gt;","synthetic":false,"types":["sized_chunks::sized_chunk::Chunk"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()