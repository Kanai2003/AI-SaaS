const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <main className="h-full bg-gradient-to-r from-blue-950 to-cyan-950 overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>
        </main>
    );
}

export default LandingLayout;