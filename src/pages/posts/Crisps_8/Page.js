import React from "react";

import {
  PostTemp,
  P,
  H1,
  H2,
  Href,
  Img,
  Youtube,
} from "src/pages/posts/Element";

export default function Page(props) {
  return (
    <PostTemp {...props}>
      <P>
        Crisps 8 is a rapidly prototyped autonomous robot built by a team of six
        within four weeks. The goal was to detect foam block density, navigate
        an arena, and sort blocks to the correct zone under strict hardware
        constraints.
      </P>

      <H1>Task</H1>
      <P>
        The robot searches for foam blocks and detects their densities one by
        one. If a block is dense, a red LED turns on and the robot delivers it
        to the red zone. Otherwise, a green LED turns on and the robot delivers
        it to the green zone.
      </P>
      <P>
        Additional requirements include flashing an amber LED while moving and
        using only approved electronic components.
      </P>
      <P>The arena layout is shown below:</P>
      <Img {...props} image="Arena.JPG" />

      <H1>Mechanical</H1>
      <P>The CAD model of the final design is shown as follows:</P>
      <Img {...props} image="CAD.PNG" />
      <P>
        To climb the ramp, the wheels were installed at the back in the final
        iteration, and higher-torque motors were chosen despite slower motion.
      </P>
      <P>
        A simple servo lifts a cage mechanism that surrounds the foam block for
        transportation.
      </P>

      <H1>Software &amp; Electrical</H1>
      <H2>Overall flow</H2>
      <P>
        The program is organized into component-level classes. A single Arduino
        loop repeatedly runs data collection and task execution logic.
      </P>
      <Img {...props} image="Code_Structure.JPG" />

      <H2>Line following</H2>
      <P>
        The line follower uses four IR sensors (OP704) with a Schmitt trigger
        (SN74HC14N), outputting 0V on white and 5V on black.
      </P>
      <Img {...props} image="Line_sensor.JPG" />
      <P>
        A PID tuning and movement demonstration is shown in the following video:
      </P>
      <Youtube id="x69hLnI_X6I" />

      <H2>Block detection</H2>
      <P>
        With the use of an IR sensor, we could get different digital readings
        when the robot detects low and high density block respectively. The
        following video demonstrated our prototype design of the IR sensor with
        the red and green light reflecting its result:
      </P>
      <Youtube id="e7HOoC5pfQ8" />

      <H1>Result</H1>
      <P>
        The final robot can navigate and perform density-based sorting under
        competition constraints, with iterative improvements made throughout
        mechanical assembly and software tuning.
      </P>
      <P>Low-density block sorting demonstration:</P>
      <Youtube id="VldJTC6Romo" />
      <P>High-density block sorting demonstration:</P>
      <Youtube id="eVUOj6NrRks" />

      <H1>File</H1>
      <P>
        Code:{" "}
        <Href embed="https://github.com/Chloe-Can-Code/Crisps-8">
          https://github.com/Chloe-Can-Code/Crisps-8
        </Href>
      </P>
      <P>
        Solidworks file:{" "}
        <Href embed="https://drive.google.com/drive/folders/1B5PASkxrjD743tD0dR7fWBg_62aWCcYP?usp=sharing">
          https://drive.google.com/drive/folders/1B5PASkxrjD743tD0dR7fWBg_62aWCcYP?usp=sharing
        </Href>
      </P>
      <P>
        Document:{" "}
        <Href embed="https://drive.google.com/drive/folders/1Bzmjw22LLzcb6WtHO2hnX3F-8LPrM3KZ?usp=sharing">
          https://drive.google.com/drive/folders/1Bzmjw22LLzcb6WtHO2hnX3F-8LPrM3KZ?usp=sharing
        </Href>
      </P>
    </PostTemp>
  );
}
