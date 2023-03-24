import { useState, useEffect } from "react";

const Staff = () => {
  const [botInfo, setBotInfo] = useState(null);
  const [showReasonBox, setShowReasonBox] = useState(false);
  const [reason, setReason] = useState('');

  useEffect(() => {
    const fetchBotInfo = async () => {
      try {
        const response = await fetch('https://adminapi.topiclist.xyz');
        const data = await response.json();
        setBotInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBotInfo();
  }, []);

  const handleButtonClick = (action) => {
    setShowReasonBox(true);
    if (action === 'ban') {
      setReason('This bot has violated our terms of service.');
    } else if (action === 'remove') {
      setReason('This bot is no longer active or maintained.');
    }
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <>
      {botInfo && (
        <div className="w-full flex flex-col py-2">
          <div className="flex items-center bg-blue-900/10 p-3">
            <img
              src={botInfo.avatar_url}
              alt={`${botInfo.username}'s avatar`}
              className="h-[150px] w-[150px] rounded-lg"
            />
            <div className="flex flex-col h-[130px] ml-3">
              <p className="font-bold text-4xl">
                {botInfo.username}#{botInfo.discriminator}
              </p>
              <p className="font-semibold text-lg text-white/70">{botInfo.short_description}</p>
              <div className="h-full" />
              <div className="flex items-center">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleButtonClick('ban')}
                >
                  Ban
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleButtonClick('remove')}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          {showReasonBox && (
            <div className="mt-4">
              <label className="font-semibold">Reason:</label>
              <textarea
                className="block w-full rounded border border-gray-300 p-2 mt-1"
                rows="4"
                value={reason}
                onChange={handleReasonChange}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Staff;
