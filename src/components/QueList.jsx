import React, { useState } from "react";

const data = [
  {
    id: "3",
    name: "Fortnite.ipa",
    size: "4.20 MB",
    status: "50%",
    timeLeft: "3 hours",
    lastModification: "2024/02/20",
    isChecked: false,
  },
  {
    id: "4",
    name: "Pokemon Go.app",
    size: "6.80 MB",
    status: "25%",
    timeLeft: "5 hours",
    lastModification: "2024/02/10",
    isChecked: true,
  },
  {
    id: "5",
    name: "Angry Birds.apk",
    size: "2.80 MB",
    status: "90%",
    timeLeft: "30 minutes",
    lastModification: "2024/02/25",
    isChecked: false,
  },
  {
    id: "6",
    name: "Super Mario Bros.exe",
    size: "7.00 MB",
    status: "Complete",
    timeLeft: "N/A",
    lastModification: "2024/02/12",
    isChecked: true,
  },
  {
    id: "7",
    name: "Candy Crush Saga.ipa",
    size: "3.50 MB",
    status: "10%",
    timeLeft: "4 hours",
    lastModification: "2024/02/28",
    isChecked: false,
  },
  {
    id: "8",
    name: "FIFA 2024.apk",
    size: "8.20 MB",
    status: "75%",
    timeLeft: "1 hour",
    lastModification: "2024/02/14",
    isChecked: true,
  },
  {
    id: "9",
    name: "Clash of Clans.ipa",
    size: "5.60 MB",
    status: "60%",
    timeLeft: "2 hours",
    lastModification: "2024/02/18",
    isChecked: false,
  },
  {
    id: "10",
    name: "Minecraft.app",
    size: "9.50 MB",
    status: "15%",
    timeLeft: "6 hours",
    lastModification: "2024/02/22",
    isChecked: true,
  },
  {
    id: "11",
    name: "Among Us.apk",
    size: "4.90 MB",
    status: "20%",
    timeLeft: "4 hours",
    lastModification: "2024/02/11",
    isChecked: false,
  },
  {
    id: "12",
    name: "Tetris.exe",
    size: "6.00 MB",
    status: "Complete",
    timeLeft: "N/A",
    lastModification: "2024/02/19",
    isChecked: true,
  },
  {
    id: "13",
    name: "PUBG Mobile.ipa",
    size: "12.30 MB",
    status: "80%",
    timeLeft: "45 minutes",
    lastModification: "2024/02/26",
    isChecked: false,
  },
  {
    id: "14",
    name: "Roblox.app",
    size: "10.50 MB",
    status: "30%",
    timeLeft: "3 hours",
    lastModification: "2024/02/15",
    isChecked: true,
  },
  {
    id: "15",
    name: "Zelda.apk",
    size: "15.20 MB",
    status: "70%",
    timeLeft: "1 hour",
    lastModification: "2024/02/17",
    isChecked: false,
  },
  {
    id: "16",
    name: "Genshin Impact.exe",
    size: "20.00 MB",
    status: "Complete",
    timeLeft: "N/A",
    lastModification: "2024/02/20",
    isChecked: true,
  },
  {
    id: "17",
    name: "Sonic Dash.ipa",
    size: "6.80 MB",
    status: "45%",
    timeLeft: "2 hours",
    lastModification: "2024/02/24",
    isChecked: false,
  },
  {
    id: "18",
    name: "Need for Speed.app",
    size: "18.50 MB",
    status: "10%",
    timeLeft: "5 hours",
    lastModification: "2024/02/13",
    isChecked: true,
  },
  {
    id: "19",
    name: "GTA San Andreas.apk",
    size: "25.60 MB",
    status: "60%",
    timeLeft: "2 hours",
    lastModification: "2024/02/21",
    isChecked: false,
  },
  {
    id: "20",
    name: "Assassin's Creed.exe",
    size: "30.00 MB",
    status: "Complete",
    timeLeft: "N/A",
    lastModification: "2024/02/18",
    isChecked: true,
  },
  {
    id: "21",
    name: "Call of Duty.ipa",
    size: "22.30 MB",
    status: "75%",
    timeLeft: "1 hour",
    lastModification: "2024/02/23",
    isChecked: false,
  },
  {
    id: "22",
    name: "Fruit Ninja.app",
    size: "8.70 MB",
    status: "20%",
    timeLeft: "4 hours",
    lastModification: "2024/02/16",
    isChecked: true,
  },
];

export default function QueList() {
  const [DownloadList, setDownloadList] = useState(data);
  const getStatus = (status) => {
    if (status === "Complete") {
      return status;
    } else {
      let percentage = parseFloat(status);
      console.log(percentage);
      percentage = Math.min(100, Math.max(0, percentage));

      return (
        <div className="text-center max-w-[200px]">
          <span>{` ${percentage}%`}</span>
          <div className="w-[200px]  h-2 bg-gray-200 rounded-md mt-2">
            <div style={{ width: `${percentage}%` }} className={` h-2 bg-gradient-to-r from-sky-500 to-purple-600 rounded-md border`}></div>
          </div>
        </div>
      );
    }
  };

  const handleToggle = (id) => {
    const index = DownloadList.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedDownloadList = [...DownloadList];
      updatedDownloadList[index].isChecked = !updatedDownloadList[index].isChecked;
      setDownloadList(updatedDownloadList);
    }
  };

  const handleToggleAll = () => {
    const allChecked = DownloadList.every((item) => item.isChecked);
    const updatedDownloadList = DownloadList.map((item) => ({ ...item, isChecked: !allChecked }));
    setDownloadList(updatedDownloadList);
  };

  return (
    <main className="text-xl overflow-x-auto max-h-[700px]">
      <table className="w-full table-auto">
        <thead className="text-left">
          <tr>
            <th className="px-4 py-2">
              <input onClick={handleToggleAll} type="checkbox" className="form-checkbox" />
            </th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Size</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Time Left</th>
            <th className="px-4 py-2">Last Modification</th>
          </tr>
        </thead>
        <tbody>
          {DownloadList.map((item) => (
            <tr key={item.id} className="hover:bg-gray-200/25 duration-300">
              <td className="px-4 py-2">
                <input type="checkbox" checked={item.isChecked} onChange={() => handleToggle(item.id)} className="form-checkbox checked:bg-gradient-to-b from-sky-500 to-purple-500" />
              </td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.size}</td>
              <td className="px-4 py-2">{getStatus(item.status)}</td>
              <td className="px-4 py-2">{item.timeLeft}</td>
              <td className="px-4 py-2">{item.lastModification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
