export type MenuProps = {
  modalSetting: boolean;
  closFunc: () => void;
};

export type Staff = {
  name: String;
  image: String;
  position: String;
  no: String;
};

/**
 * Village Chief/Headman
|
+-- Administration
|     |
|     +-- Secretary
|     +-- Treasurer
|     +-- Public Information Officer
|
+-- Public Works
|     |
|     +-- Sanitation Crew
|     +-- Maintenance Crew
|     +-- Groundskeeping Crew
|
+-- Public Safety (if applicable)
|     |
|     +-- Police Officers
|     +-- Firefighters
|
+-- Social Services (if applicable)
|     |
|     +-- Community Center Staff
|     +-- Social Workers
 */