function About() {
    return (
        <div className="min-h-screen bg-gray-50 px-8 py-10 flex items-center justify-center">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    About This Project
                </h1>
                <p className="text-gray-500 leading-relaxed">
                    ArticleWebsite is a simple blog platform built with React, where
                    you can browse articles, search through them, and add your own.
                    This project was built as a learning exercise to practice React
                    fundamentals — state, props, routing, and working with APIs.
                </p>
            </div>
        </div>
    );
}
export default About;