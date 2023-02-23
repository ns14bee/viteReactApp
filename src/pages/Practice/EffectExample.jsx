import React, { useEffect, useState } from "react";

const EffectExample = () => {
	const [number, setNumber] = useState(0);
	const [id, setId] = useState(1);
	const [auto, setAuto] = useState(0);
	const [name, setName] = useState("");
	const [user, setUser] = useState({
		name: "",
		selected: false,
	});
	const [newUser, setNewUser] = useState({});
	const handleAddUser = () => {
		setUser(() => ({ name: name, selected: false }));
		setName("");
	};
	const handleSelectUser = () => {
		setUser((prev) => ({ ...prev, selected: true }));
	};

	useEffect(() => {
		document.title = `Effect ${user.selected ? user.name : ""}`;
	}, [user.selected]);

	useEffect(() => {
		const interval = setInterval(() => {
			setAuto((prev) => prev + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		(async () => {
			try {
				let data = await fetch(
					`https://jsonplaceholder.typicode.com/users/${id}`,
					{ signal }
				);

				console.log("fetched");
				let newData = await data.json();
				setNewUser((prev) => ({ ...prev, ...newData }));
			} catch (err) {
				console.log(err);
			}
		})();
		return () => {
			controller.abort();
		};
	}, [id]);

	return (
		<div>
			<div className="m-4 p-4">
				<h2>You clicked {number} times</h2>
				<button
					className="m-2 p-4"
					onClick={() => setNumber((prev) => prev + 1)}
				>
					Increase
				</button>
			</div>
			<hr className="my-3" />
			<div className="m-4 p-4">
				<h2>User</h2>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="name"
					name="name"
				/>
				<br />
				<button className="m-2 p-1" onClick={handleAddUser}>
					Add user
				</button>
				<br />
				<button className="m-2 p-1" onClick={handleSelectUser}>
					select
				</button>
				<br />
				{`{name: ${user.name}, selected:${user.selected.toString()}}`}
			</div>
			<hr className="my-3" />
			<div className="m-4 p-4">useEffect with interval {auto}</div>
			<hr className="my-3" />
			<div className="m-4 p-4">
				Name: {newUser?.name}
				<br />
				Username: {newUser?.username}
				<br />
				Email: {newUser?.email}
				<div className="m-3 p-2">
					{[1, 2, 3].map((item, index) => {
						return (
							<button
								key={index}
								item
								className="my-2 p-2"
								onClick={() => setId(() => item)}
							>
								User{item}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default EffectExample;
