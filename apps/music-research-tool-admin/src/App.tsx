import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RecommendationList } from "./recommendation/RecommendationList";
import { RecommendationCreate } from "./recommendation/RecommendationCreate";
import { RecommendationEdit } from "./recommendation/RecommendationEdit";
import { RecommendationShow } from "./recommendation/RecommendationShow";
import { BriefList } from "./brief/BriefList";
import { BriefCreate } from "./brief/BriefCreate";
import { BriefEdit } from "./brief/BriefEdit";
import { BriefShow } from "./brief/BriefShow";
import { MusicList } from "./music/MusicList";
import { MusicCreate } from "./music/MusicCreate";
import { MusicEdit } from "./music/MusicEdit";
import { MusicShow } from "./music/MusicShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MusicResearchTool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Recommendation"
          list={RecommendationList}
          edit={RecommendationEdit}
          create={RecommendationCreate}
          show={RecommendationShow}
        />
        <Resource
          name="Brief"
          list={BriefList}
          edit={BriefEdit}
          create={BriefCreate}
          show={BriefShow}
        />
        <Resource
          name="Music"
          list={MusicList}
          edit={MusicEdit}
          create={MusicCreate}
          show={MusicShow}
        />
      </Admin>
    </div>
  );
};

export default App;
