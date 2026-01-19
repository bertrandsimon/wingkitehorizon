import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="h-[69px] w-[148px] relative flex-shrink-0"
      data-name="Wing Kite Horizon logo"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ overflow: "hidden" }}
      >
        <Image
          src="/images/logo-wingkite-horizon.png"
          alt="Wing Kite Horizon logo"
          fill
          className="object-contain"
          style={{
            position: "absolute",
            height: "299.4%",
            left: "-21.94%",
            top: "-85.03%",
          }}
        />
      </div>
    </div>
  );
}
