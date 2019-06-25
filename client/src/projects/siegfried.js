import React from "react";

export function Siegfried() {
  return (
    <div className="project" id="siegfried">
      <div className="project_header">
        <h2>Siegfried</h2>
        <h4>Sparks and fire flames special effect for Siegfried opera.</h4>
        <p>Director: Hans-Peter Lehmann</p>
        <p>Siegfried: Louis Gentile, Leonid Zakhozhaev</p>
        <p>Opera, Wrocław, June 2005</p>
      </div>
      <div className="project_content">
        <div className="project_story">
          <h3>STORY</h3>
          <p>
            Siegfried hammers the anvil to reforge Nothung sward in the end of
            act one. A special effect for hammering was desired.
          </p>
        </div>

        <div className="project_challenge">
          <h3>CHALLANGE</h3>
          <p>
            Sparks and fire flames need to come out every time when Siegfried
            hits the anvil with hammer.
          </p>
        </div>

        <div className="project_solution">
          <h3>SOLUTION</h3>
          <p>
            Bespoke pneumatic system was build to blow short burst of air into a
            anvil chamber filled with magnesium filings and throw them through
            heating elements. Ignited fillings get out thru slit in the anvil
            creating the sparks and fire. To trigger the effect in sync with
            hammering I designed and built an electronic module. The module
            senses hits with microphone and drives an air valve between
            compressor and the anvil. The module is build from 3 blocks:
            microphone input with passive filter, audio preamp and a flip-flop
            circuit. The filter rolles off all unwanted frequencies and is
            calculated to respond only on hammer noice. An amplified, filtered
            hammer sound triggers flip-flop which switch on, hold, and switch
            off the air valve.
          </p>
        </div>
      </div>
    </div>
  );
}