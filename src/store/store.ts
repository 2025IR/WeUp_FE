import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./auth";
import projectReducer from "./project";
import roleReducer from "./role";
import storage from "redux-persist/lib/storage/session"; // 새로고침 시 저장할 저장소 (현재 세션)

// persist 설정
const projectPersistConfig = {
  key: "project",
  storage,
};

const rolePersistConfig = {
  key: "role",
  storage,
};

// 실제 사용되는 persist wrapper 함수 정의 (설정 + 기존 reducer)
const persistedProjectReducer = persistReducer(
  projectPersistConfig,
  projectReducer
);
const persistedRoleReducer = persistReducer(rolePersistConfig, roleReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: persistedProjectReducer,
    role: persistedRoleReducer,
  },
  // 직렬화 시킬 때 경고 무시..
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
