import { Landmark } from "lucide-react";
import Link from "next/link";
import { Town } from "@/types/bridge";

export default function TownBlocks({ town }: { town: Town }) {
  const minX = Math.min(...town.townBlocks.map((plot) => plot.coordinates.x));
  const maxX = Math.max(...town.townBlocks.map((plot) => plot.coordinates.x));
  const minZ = Math.min(...town.townBlocks.map((plot) => plot.coordinates.z));
  const maxZ = Math.max(...town.townBlocks.map((plot) => plot.coordinates.z));

  const gridSize = {
    width: maxX - minX + 1,
    height: maxZ - minZ + 1,
  };

  const getBlock = (x: number, z: number) =>
    town.townBlocks.find((block) => block.coordinates.x === x && block.coordinates.z === z) || null;

  return (
    <div
      className={`grid w-fit gap-2`}
      style={{
        gridTemplateColumns: `repeat(${gridSize.width}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${gridSize.height}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: gridSize.height }, (_, rowIndex) =>
        Array.from({ length: gridSize.width }, (_, colIndex) => {
          const x = colIndex + minX;
          const z = maxZ - rowIndex;

          const block = getBlock(x, z);

          if (block) {
            return (
              <div key={`${x}-${z}`} className="dropdown dropdown-hover">
                <button className="btn btn-lg btn-block aspect-square">{block.isHomeBlock && <Landmark className="shrink-0" />}</button>
                <div className="card dropdown-content card-compact z-[1] w-max bg-base-200 shadow">
                  <div className="card-body">
                    <h3 className="card-title">{block.name || block.type}</h3>
                    <p>Type: {block.type}</p>
                    <p>
                      Occupier:{" "}
                      {(block.resident && (
                        <Link className="link-hover link-secondary" href={`/residents/${block.resident.UUID}`}>
                          {block.resident.name}
                        </Link>
                      )) ||
                        "None"}
                    </p>
                    <p>Tax: {block.plotTax}</p>
                  </div>
                </div>
              </div>
            );
          } else {
            return <div key={`${x}-${z}`} />;
          }
        }),
      )}
    </div>
  );
}
