export function useDetails(user) {
    if (user.name==="") return <></>;
    return (
    <>
        <div>
            Name : {user.name},
            Online-Status : {(user.status)?"Online":"Offline"}
        </div>
    </>
    );
}