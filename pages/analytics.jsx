import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <div className=" bg-transparent h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-6xl font-bold">404</h1>
      <p className="text-white/70 text-lg font-semibold mt-3">
        This page might have been moved, deleted, or never existed.
      </p>
      <div className="flex mt-6 items-center">
        <button
          onClick={() => {
            router.replace("/");
          }}
          className="rounded-lg text-white bg-blue-600 py-3 px-4 min-w-[100px]"
        >
          Home
        </button>
        <button
          onClick={() => {
            router.back();
          }}
          className="rounded-lg text-white bg-zinc-900 py-3 px-4 min-w-[100px] ml-3 "
        >
          Back
        </button>
      </div>
    </div>
  );
}
