import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import Mock_data from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom"
it("Should render restaurant data", () => {
    render(<RestaurantCard resData={Mock_data}/>);
    const resName=screen.getByText("Chinese Wok");
    expect(resName).toBeInTheDocument();
});  