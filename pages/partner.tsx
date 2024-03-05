import Main from "../components/layout/partners/Main";

export default function Partners() {
  return (
    <>
      <div className="w-full my-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="mt-16 text-4xl font-bold leading-tight tracking-tight text-cyber-cyan sm:text-5xl">
              🤝{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-7xl text-center">
                Our Partners
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-neon-blue lg:mx-auto">
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text ">
                We value our partners at TopicList and appreciate their support.
              </span>
            </p>
            <div className="mb-14" />
          </div>
        </div>
        <Main />
      </div>
    </>
  );
}
