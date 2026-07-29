import React from "react";

import {
  PostTemp,
  P,
  H1,
  H2,
  Href,
  Img,
  UL,
  Youtube,
} from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        LogSim is a digital circuit logic simulator designed to help users
        define and simulate logic circuits. At its core is a custom-built
        circuit description language called Digital Logic Layout Mapper (DLLM),
        which describes how digital components are connected and interact.
        LogSim parses DLLM files and simulates signal behaviour across the
        circuit over time.
      </P>

      <H1>Software overview</H1>
      <P>
        A complete DLLM file fully specifies the structure of a digital circuit,
        including:
      </P>
      <UL>
        <li>Supported digital devices and how they are connected</li>
        <li>Switches that can be toggled during simulation</li>
        <li>Monitor points used to observe signal states</li>
      </UL>
      <P>
        While DLLM files define default settings, such as initial switch states,
        monitor locations, and the number of cycles to simulate, the GUI allows
        these parameters to be modified dynamically during runtime. This makes
        it easy to experiment with different configurations without editing the
        source file.
      </P>
      <P>
        To support circuit visualisation, LogSim includes several UI features
        such as grid rendering and an optional, and admittedly not very
        practical, 3D mode.
      </P>
      <P>
        A demonstration video below shows how to run and interact with the
        LogSim GUI:
      </P>
      <Youtube id="qfp6WvuLmQ0" />
      <P>
        For users who prefer a visual workflow, the GUI provides an intuitive
        way to load DLLM files, control simulation parameters, and inspect
        signal states in real time.
      </P>
      <Img {...props} image="GUI_Loaded.PNG" />
      <Img {...props} image="GUI_Running.PNG" />
      <P>
        If you're feeling adventurous, LogSim can also be run entirely from the
        command line. The CLI mode strips away visual aids and offers a more
        hands-on experience:
      </P>
      <Img {...props} image="CLI.PNG" />
      <P>
        LogSim supports both English and Traditional Chinese interfaces. Below
        is a demonstration of the GUI running in Traditional Chinese mode:
      </P>
      <Youtube id="zUXD4m5FnKw" />
      <Img {...props} image="GUI_Traditional_Chinese.PNG" />
      <P>
        A{" "}
        <Href embed="https://drive.google.com/file/d/17H7r9Ne-Cz-KmVp-deQj1FnedbaxntlE/view?usp=drive_link">
          user guide
        </Href>{" "}
        has been created to explain how to use the program.
      </P>

      <H1>EBNF</H1>
      <P>
        To rigorously define the syntax of the DLLM language, we used Extended
        Backus-Naur Form (EBNF). The EBNF specification precisely describes
        valid constructs and ensures consistency between the language definition
        and the parser implementation. The full EBNF specification can be found
        on page 3 of the{" "}
        <Href embed="https://drive.google.com/file/d/1j1_ctizmBTO1Ao5khHVixrWJdPznYhH2/view?usp=drive_link">
          first report
        </Href>
        .
      </P>

      <H1>Error handling</H1>
      <H2>Errors and warnings</H2>
      <P>
        Error handling in LogSim is implemented directly within the DLLM parser.
        Errors are categorised into syntax errors and semantic errors to
        simplify detection and improve clarity.
      </P>
      <H2>Syntax errors</H2>
      <P>
        Syntax errors occur when a DLLM file violates the EBNF rules, for
        example, a missing semicolon or malformed statement. These are
        relatively straightforward to detect, as the parser only needs to
        enforce the grammar rules. Wherever possible, errors are classified as
        syntax errors to reduce overall code complexity.
      </P>
      <H2>Semantic errors</H2>
      <P>
        Semantic errors arise when the DLLM file is syntactically valid but
        logically incorrect. For instance, attempting to connect to a device
        that was never defined. These cases must be manually identified and
        handled, as they depend on the meaning of the circuit rather than its
        structure.
      </P>
      <H2>Semantic warnings</H2>
      <P>
        LogSim also issues warnings for cases that are technically valid but
        likely unintended. An example would be defining a device that is never
        used. While the simulation can still proceed, these warnings help users
        catch potential mistakes early. A detailed breakdown of all errors and
        warnings can be found in the{" "}
        <Href embed="https://drive.google.com/file/d/1j1_ctizmBTO1Ao5khHVixrWJdPznYhH2/view?usp=drive_link">
          first report
        </Href>{" "}
        (pages 5–10).
      </P>
      <H1>Response to error</H1>
      <P>
        When a DLLM file contains errors, LogSim attempts to detect and report
        as many issues as possible in a single run. Each error message includes
        precise location information, making debugging significantly easier.
      </P>
      <P>
        To stress-test the system, we intentionally ran LogSim against files
        containing extreme input cases, including one composed entirely of very
        long Chinese poems. These tests helped validate the parser's robustness
        and resilience.
      </P>
      <P>Examples of error output are shown below:</P>
      <Img {...props} image="Error_Curly_Brackets.PNG" />
      <Img {...props} image="Error_Keyword.PNG" />
      <Img {...props} image="Error_Device.PNG" />
      <Img {...props} image="Error_Terminal.PNG" />

      <H1>File</H1>
      <P>
        GitHub:{" "}
        <Href embed="https://github.com/Chloe-Can-Code/LogSim">
          https://github.com/Chloe-Can-Code/LogSim
        </Href>
      </P>
      <P>
        Documents:{" "}
        <Href embed="https://drive.google.com/drive/folders/1dTHmL8PDiuz7YwYTxfTirWpas7Bs5vjX?usp=sharing">
          https://drive.google.com/drive/folders/1dTHmL8PDiuz7YwYTxfTirWpas7Bs5vjX?usp=sharing
        </Href>
      </P>
    </PostTemp>
  );
}
