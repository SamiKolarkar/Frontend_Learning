function SampleHoc(OlderComponent) {
    return (
        (props)=>{
            return (
                <>
                    <div>
                        <OlderComponent />
                        <h2>This is sample Higher Order Components...</h2>
                    </div>
                </>
            );
        }
    );
}

export default SampleHoc;